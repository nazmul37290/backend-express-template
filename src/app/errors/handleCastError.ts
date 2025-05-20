import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/errorInterface';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err?.path as string,
      message: err?.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};
