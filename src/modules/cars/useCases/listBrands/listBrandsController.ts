import { Request, Response } from 'express';

import { ListBradsUseCase } from './listBrandsUseCase';

class ListBrandsController {
  constructor(private listBrandsUseCase: ListBradsUseCase) {}

  handle(req: Request, res: Response): Response {
    const brands = this.listBrandsUseCase.execute();

    return res.json(brands);
  }
}

export { ListBrandsController };
