import { Request, Response } from 'express';

import { CreateBrandUseCase } from './CreateBrandUseCase';

class CreateBrandController {
  constructor(private createBrandUseCase: CreateBrandUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, history } = req.body;

    this.createBrandUseCase.execute({ name, history });

    return res.status(201).send();
  }
}

export { CreateBrandController };
