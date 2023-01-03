import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateBrandUseCase } from './CreateBrandUseCase';

class CreateBrandController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, history } = req.body;

    const createBrandUseCase = container.resolve(CreateBrandUseCase);

    await createBrandUseCase.execute({ name, history });

    return res.status(201).send();
  }
}

export { CreateBrandController };
