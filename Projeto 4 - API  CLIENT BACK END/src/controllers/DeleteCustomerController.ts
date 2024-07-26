import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const deleteCustomerService = new DeleteCustomerService();

    const { id } = request.query as { id: string };

    const customer = await deleteCustomerService.execute({ id });

    reply.send(customer);
  }
}
export { DeleteCustomerController };
