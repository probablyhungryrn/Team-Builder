/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * Initializes the TeamBuilder app.
 */
function TeamBuilder() {
  this.filters = {
  };

  this.dialogs = {};

  firebase.auth().signInAnonymously().then(() => {
    this.initTemplates();
    this.initRouter();
    // this.initReviewDialog();
    this.initFilterDialog();
  }).catch(err => {
    console.log(err);
  });
}

/**
 * Initializes the router for the TeamBuilder app.
 */
TeamBuilder.prototype.initRouter = function() {
  this.router = new Navigo();

  this.router
    .on({
      '/': () => {
        this.updateQuery(this.filters);
      }
    })
    .on({
      '/setup': () => {
        this.viewSetup();
      }
    })
    .on({
      '/persons/*': () => {
        let path = this.getCleanPath(document.location.pathname);
        const id = path.split('/')[2];
        this.viewperson(id);
      }
    })
    .on({
      '/ideas/*': () => {
        let path = this.getCleanPath(document.location.pathname);
        const id = path.split('/')[2];
        this.viewperson(id);
      }
    })
    .on({
      '/skills/*': () => {
        let path = this.getCleanPath(document.location.pathname);
        const id = path.split('/')[2];
        this.viewperson(id);
      }
    })
    .on({
      '/events/*': () => {
        let path = this.getCleanPath(document.location.pathname);
        const id = path.split('/')[2];
        this.viewperson(id);
      }
    })
    .resolve();

  firebase
    .firestore()
    .collection('persons')
    .limit(1)
    .onSnapshot(snapshot => {
      if (snapshot.empty) {
        this.router.navigate('/setup');
      }
    });
};

TeamBuilder.prototype.getCleanPath = function(dirtyPath) {
  if (dirtyPath.startsWith('/index.html')) {
    return dirtyPath.split('/').slice(1).join('/');
  } else {
    return dirtyPath;
  }
};

TeamBuilder.prototype.getFirebaseConfig = function() {
  return firebase.app().options;
};

TeamBuilder.prototype.getRandomItem = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

TeamBuilder.prototype.data = {
  skills: [
    'c++',
    'java',
    'javascript',
    'firestore',
    'nodejs'
  ],
  personName: [
    "Jade" ,
    "Morgan" ,
    "Hortensia" ,
    "Noreen" ,
    "Art" ,
    "Raisa" ,
    "Altagracia" ,
    "Lorinda" ,
    "Luigi" ,
    "Ned" ,
    "Pilar" ,
    "Tonda" ,
    "Dolores" ,
    "Sharda" ,
    "Emely" ,
    "Irina"
  ],
  ideas: [
    'idea 1',
    'saveTheWorld',
    'idea 2'
  ],
  events: [
    'event 1'
  ],
  cities: [
    'Albuquerque',
    'Arlington',
    'Atlanta',
    'Austin',
    'Baltimore',
    'Boston',
    'Charlotte',
    'Chicago',
    'Cleveland',
    'Colorado Springs',
    'Columbus',
    'Dallas',
    'Denver',
    'Detroit',
    'El Paso',
    'Fort Worth',
    'Fresno',
    'Houston',
    'Indianapolis',
    'Jacksonville',
    'Kansas City',
    'Las Vegas',
    'Long Island',
    'Los Angeles',
    'Louisville',
    'Memphis',
    'Mesa',
    'Miami',
    'Milwaukee',
    'Nashville',
    'New York',
    'Oakland',
    'Oklahoma',
    'Omaha',
    'Philadelphia',
    'Phoenix',
    'Portland',
    'Raleigh',
    'Sacramento',
    'San Antonio',
    'San Diego',
    'San Francisco',
    'San Jose',
    'Tucson',
    'Tulsa',
    'Virginia Beach',
    'Washington'
  ]
};

window.onload = () => {
  window.app = new TeamBuilder();
};
