import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, listPrice, salePrice, brand_id } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      name,
      description,
      listPrice,
      salePrice,
      brand_id,
    });

    return res.status(201).json(car);
  }
}

export { CreateCarController };
