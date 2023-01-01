class ImportBrandUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { ImportBrandUseCase };
