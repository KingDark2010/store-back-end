/* eslint-disable */
import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter'

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(_info: jasmine.JasmineStartedInfo, log: string): string {
    return `${log}`
  }
}

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
    suite: {
      displayNumber: true
    },
    spec: {
      displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
  })
)
