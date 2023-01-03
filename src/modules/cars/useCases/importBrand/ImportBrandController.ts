import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportBrandUseCase } from './ImportBrandUseCase';

class ImportBrandController {
  handle(req: Request, res: Response): Response {
    const { file } = req;

    const importBrandUseCase = container.resolve(ImportBrandUseCase);

    importBrandUseCase.execute(file);

    return res.send();
  }
}

export { ImportBrandController };
