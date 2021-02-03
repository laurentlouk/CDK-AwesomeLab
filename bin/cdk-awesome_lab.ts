#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkAwesomeLabStack } from '../lib/cdk-awesome_lab-stack';

const app = new cdk.App();
new CdkAwesomeLabStack(app, 'CdkAwesomeLabStack');
