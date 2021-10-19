import { Request, Response } from "express";

import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const creteMessageService = new CreateMessageService();

    const result = await creteMessageService.execute(message, user_id);

    return response.status(201).json(result);
  }
}

export { CreateMessageController };