import { v4 as uuidV4 } from 'uuid';

class Brand {
  id?: string;
  name: string;
  history: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Brand };
