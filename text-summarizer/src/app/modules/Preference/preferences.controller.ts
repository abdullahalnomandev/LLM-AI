import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ApiServices } from './preferences.service';

const getSummarize = catchAsync(async (req: Request, res: Response) => {
  const result = await ApiServices.getTextSummarize(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Api retrive',
    data: result,
  });
});

export const ApiController = { getSummarize};


