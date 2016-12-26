
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

/**
 * Return the Big 5 Traits normalized
 * @return Array      The 5 main traits
 */
function flatten_big5 (tree) {
  var profile = typeof (tree) === 'string' ? JSON.parse(tree) : tree;
  var _big5 = profile.tree.children[0].children[0].children;
  return _big5.map(function(trait) {
      return { name: trait.name, value: trait.percentage };
  });
};

module.exports.flatten = { big5 : flatten_big5 };

