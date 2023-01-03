import { Request, Response } from 'express';

import { CreateBrandUseCase } from './CreateBrandUseCase';

class CreateBrandController {
  constructor(private createBrandUseCase: CreateBrandUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, history } = req.body;

    await this.createBrandUseCase.execute({ name, history });

    return res.status(201).send();
  }
}

export { CreateBrandController };
