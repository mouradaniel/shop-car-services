import { Request, Response } from 'express';

import { ImportBrandUseCase } from './ImportBrandUseCase';

class ImportBrandController {
  constructor(private importBrandUseCase: ImportBrandUseCase) {}
  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.importBrandUseCase.execute(file);

    return res.send();
  }
}

export { ImportBrandController };
