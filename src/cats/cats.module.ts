import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// @Global() - will make this module global
// Here the CatsService can be used by other mdoules without importing the CatsModule in their imports array
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // Any module that imports cats module will now have access to the CatsService and will
  // share the same instance with all the other modules that import it as well
  exports: [CatsService],
})
export class CatsModule {}

// Module Re-exporting
// CommonModule is imported and exported, making this module available for other modules which import the CoreModule.
// @Module({
//   imports: [CommonModule],
//   exports: [CommonModule]
// })
// export class CoreModule {}
