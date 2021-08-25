import { Test, TestingModule } from '@nestjs/testing'
import { getLoggerToken } from 'nestjs-pino'
import { LcdService } from 'src/lcd/lcd.service'
import { SlashingService } from './slashing.service'

describe('SlashingService', () => {
  let service: SlashingService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SlashingService,
        {
          provide: getLoggerToken(SlashingService.name),
          useValue: {
            error: jest.fn(),
          },
        },
        {
          provide: LcdService,
          useValue: {},
        },
      ],
    }).compile()

    service = module.get<SlashingService>(SlashingService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
