
/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {

  // MongoDB
  database: {
    url : "mongodb://a943d7b2-d0b9-456f-84c2-1094bcb209e0:92775135-6e88-4729-80b7-91506b0b083f@198.11.234.76:10234/db"
  },

  tradeoff_analytics : {
    username : '2f2e29c7-23c3-4226-afc6-419ae9ab752c',
    password : 'IUuSWiclR3B6',
    version  : 'v1'
  },

  personality_insights : {
    username : 'efd10e5c-429b-4e6d-b6fb-6e2455b976d5',
    password : 'u3DzvZGutCNX',
    version  : 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: [
    {
      consumer_key :        '<consumer_key>',
      consumer_secret  :    '<consumer_secret>',
      access_token_key :    '<access_token_key>',
      access_token_secret : '<access_token_secret>',
      enabled : false // Disabled since this is just an example
    }
  ]
};

