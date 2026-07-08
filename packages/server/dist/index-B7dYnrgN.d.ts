import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

type AsyncRouteHandler<P = ParamsDictionary, ResBody = unknown, ReqBody = unknown, ReqQuery = ParsedQs> = (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction) => Promise<unknown>;
declare function asyncHandler<P = ParamsDictionary, ResBody = unknown, ReqBody = unknown, ReqQuery = ParsedQs>(handler: AsyncRouteHandler<P, ResBody, ReqBody, ReqQuery>): RequestHandler<P, ResBody, ReqBody, ReqQuery>;

declare namespace index {
  export { asyncHandler as default };
}

export { asyncHandler as a, index as i };
