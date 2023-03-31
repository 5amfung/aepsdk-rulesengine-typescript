/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { isObjectOrUndefined } from "../utils/isObjectOrUndefined";
import { Matcher } from "../types/engine";

export function createContains(): Matcher {
  return {
    matches: (context, key, values) => {
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      const contextValue: string = String(context[key]).toLowerCase();
      for (let i = 0; i < values.length; i += 1) {
        if (
          !isObjectOrUndefined(values[i]) &&
          contextValue.indexOf(String(values[i]).toLowerCase()) !== -1
        ) {
          return true;
        }
      }
      return false;
    },
  };
}
