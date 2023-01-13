import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCarsUseCase } from './ListCarsUseCase';

class ListCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, brand_id } = req.query;

    const listCarsUseCase = container.resolve(ListCarsUseCase);

    const cars = await listCarsUseCase.execute({
      name: name as string,
      brand_id: brand_id as string,
    });

    return res.json(cars);
  }
}

export { ListCarsController };
