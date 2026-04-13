import { z } from "zod";

class BaseDto {
  static schema = z.object({});

  static validate(data: unknown) {
    const result = this.schema.safeParse(data);

    if (!result.success) {
      const errors = result.error.issues.map(e => e.message);
      return { errors, value: null };
    }

    return { errors: null, value: result.data };
  }
}

export default BaseDto;