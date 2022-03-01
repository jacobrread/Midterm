import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { CreateTodoDto } from 'server/dto/create_todo.dto';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos') // create Todo
  public async create(@Body() todoPayload: CreateTodoDto) {
    const newTodo = new Todo();
    newTodo.content = todoPayload.content;

    try {
      const todo = await this.todosService.create(newTodo);
      return { todo };
    } catch (e) {
      throw new HttpException(`Todo creation failed. ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('/todos/:id') // Update todo
  public async update(@Param('todo') todoId: number) {
    const updatedTodo = await this.todosService.update(todoId);
    return { updatedTodo };
  }
}
