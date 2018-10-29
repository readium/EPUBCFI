//  Copyright (c) 2014 Readium Foundation and/or its licensees. All rights reserved.
//
//  Redistribution and use in source and binary forms, with or without modification,
//  are permitted provided that the following conditions are met:
//  1. Redistributions of source code must retain the above copyright notice, this
//  list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice,
//  this list of conditions and the following disclaimer in the documentation and/or
//  other materials provided with the distribution.
//  3. Neither the name of the organization nor the names of its contributors may be
//  used to endorse or promote products derived from this software without specific
//  prior written permission.

// Description: Main entry point for a backwards compatible public API.
// Rationale: Compatibility.
//  The test suite also uses this since it exposes more of the internals.

import * as CFIInstructions from './instructions';
import * as Interpreter from './interpreter';
import * as Generator from './generator';
import * as Parser from './parser';
import * as Util from './util';

export { CFIInstructions, CFIInstructions as Instructions, Interpreter, Generator, Parser, Util };

// Export same functions again..
export * from './instructions';
export * from './interpreter';
export * from './generator';

export * from './errors';
