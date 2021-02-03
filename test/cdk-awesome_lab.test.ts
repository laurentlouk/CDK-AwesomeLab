import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkAwesomeLab from '../lib/cdk-awesome_lab-stack';

test('Lambda Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkAwesomeLab.CdkAwesomeLabStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});

test('DynamoDB Table Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkAwesomeLab.CdkAwesomeLabStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::DynamoDB::Table"));
});


test('Api Gateway Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkAwesomeLab.CdkAwesomeLabStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::ApiGateway::Method"));
});
