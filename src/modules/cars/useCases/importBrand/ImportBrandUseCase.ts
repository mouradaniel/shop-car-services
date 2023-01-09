import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { BrandsRepository } from '@modules/cars/infra/typeorm/repositories/BrandsRepository';

interface IImportBrand {
  name: string;

  history: string;
}

@injectable()
class ImportBrandUseCase {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: BrandsRepository,
  ) {}

  loadBrands(file: Express.Multer.File): Promise<IImportBrand[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const brands: IImportBrand[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile

        .on('data', async line => {
          const [name, history] = line;

          brands.push({
            name,

            history,
          });
        })

        .on('end', () => {
          fs.promises.unlink(file.path);

          resolve(brands);
        })

        .on('error', error => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const brands = await this.loadBrands(file);

    brands.map(async brand => {
      const { name, history } = brand;

      const alreadyExistsBrand = await this.brandsRepository.findByName(name);

      if (!alreadyExistsBrand) {
        await this.brandsRepository.create({
          name,
          history,
        });
      }
    });
  }
}

export { ImportBrandUseCase };
