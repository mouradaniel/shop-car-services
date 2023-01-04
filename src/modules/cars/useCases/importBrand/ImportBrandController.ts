import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportBrandUseCase } from './ImportBrandUseCase';

class ImportBrandController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importBrandUseCase = container.resolve(ImportBrandUseCase);

    await importBrandUseCase.execute(file);

    return res.status(201).send();
  }
}

export { ImportBrandController };
