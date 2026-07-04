const childProcess = require('child_process');

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const CLI_COLORS = {
    Reset: '\x1b[0m',
    Bright: '\x1b[1m',
    Dim: '\x1b[2m',
    Underscore: '\x1b[4m',
    Blink: '\x1b[5m',
    Reverse: '\x1b[7m',
    Hidden: '\x1b[8m',

    FgBlack: '\x1b[30m',
    FgRed: '\x1b[31m',
    FgGreen: '\x1b[32m',
    FgYellow: '\x1b[33m',
    FgBlue: '\x1b[34m',
    FgMagenta: '\x1b[35m',
    FgCyan: '\x1b[36m',
    FgWhite: '\x1b[37m',
    FgGray: '\x1b[90m',

    BgBlack: '\x1b[40m',
    BgRed: '\x1b[41m',
    BgGreen: '\x1b[42m',
    BgYellow: '\x1b[43m',
    BgBlue: '\x1b[44m',
    BgMagenta: '\x1b[45m',
    BgCyan: '\x1b[46m',
    BgWhite: '\x1b[47m',
    BgGray: '\x1b[100m',
};

function execHelper(command, args, stdout = true, enableLogs = true) {
    const cmd = `${command} ${args.join(' ')}`;
    if (enableLogs) {
        console.log(
            `${CLI_COLORS.FgCyan}${CLI_COLORS.Bright}Executing command: ${cmd}${CLI_COLORS.Reset}`,
        );
    }

    try {
        const result = childProcess.spawnSync(command, args, {
            stdio: stdout ? 'inherit' : 'pipe',
            shell: true,
            encoding: 'utf-8',
        });
        if (result.status !== 0) {
            throw new Error(result.stderr || 'Command execution failed');
        }
        if (!stdout) {
            return result.stdout;
        }
    } catch (error) {
        if (!stdout) {
            console.error(
                `${CLI_COLORS.FgRed}${CLI_COLORS.Bright}Error executing command: ${cmd}${CLI_COLORS.Reset}`,
            );
            console.error(error.message);
        }
        process.exit(1);
    }
}

module.exports = {
    execHelper,
    CLI_COLORS,
};
