import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBrandsUseCase } from './ListBrandsUseCase';

class ListBrandsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listBrandsUseCase = container.resolve(ListBrandsUseCase);

    const brands = await listBrandsUseCase.execute();

    return res.json(brands);
  }
}

export { ListBrandsController };
