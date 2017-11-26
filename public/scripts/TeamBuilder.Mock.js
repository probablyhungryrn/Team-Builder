/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * Adds a set of mock persons to the Cloud Firestore.
 */
TeamBuilder.prototype.addMockPersons = function() {
  const promises = [];

  for (let i = 0; i < 20; i++) {
    let name = this.getRandomItem(this.data.personName) + ' ' +
        this.getRandomItem(this.data.personName);
    let email = name.split(' ')[0] + '@someDomain.com';
    let skills = [];
    skills.append(this.getRandomItem(this.data.skills));
    skills.append(this.getRandomItem(this.data.skills));

    // let city = this.getRandomItem(this.data.cities);
    // let price = Math.floor(Math.random() * 4) + 1;
    // let photoID = Math.floor(Math.random() * 22) + 1;
    // let photo =
    // `https://storage.googleapis.com/firestorequickstarts.appspot.com/food_${photoID}.png`;
    // let numRatings = 0;
    // let avgRating = 0;

    const promise = this.addPerson({name, skills, email});

    if (!promise) {
      alert('addPerson() is not implemented yet!');
      return Promise.reject();
    } else {
      promises.push(promise);
    }
  }

  return Promise.all(promises);
};


/**
 * Adds a set of mock persons to the Cloud Firestore.
 */
TeamBuilder.prototype.addMockIdeas = function() {
  const promises = [];

  for (let i = 0; i < 20; i++) {
    let name = this.getRandomItem(this.data.ideas) + '_' + 100 * Math.random();
    let skills = [];
    skills.append(this.getRandomItem(this.data.skills));
    skills.append(this.getRandomItem(this.data.skills));
    added_time = new Date();

    // TODO change this!!!
    let event = this.getRandomItem(this.data.events);
    
    let city = this.getRandomItem(this.data.cities);
    // let price = Math.floor(Math.random() * 4) + 1;
    // let photoID = Math.floor(Math.random() * 22) + 1;
    // let photo =
    // `https://storage.googleapis.com/firestorequickstarts.appspot.com/food_${photoID}.png`;
    // let numRatings = 0;
    // let avgRating = 0;

    const promise = this.addIdea({name, skills, added_time, event, city});

    if (!promise) {
      alert('addIdea() is not implemented yet!');
      return Promise.reject();
    } else {
      promises.push(promise);
    }
  }

  return Promise.all(promises);
};


/**
 * Adds a set of mock Ratings to the given person.
 */
TeamBuilder.prototype.addMockRatings = function(personID) {
  const ratingPromises = [];
  for (let r = 0; r < 5 * Math.random(); r++) {
    const rating =
        this.data.ratings[parseInt(this.data.ratings.length * Math.random())];
    rating.userName = 'Bot (Web)';
    rating.timestamp = new Date();
    rating.userId = firebase.auth().currentUser.uid;
    ratingPromises.push(this.addRating(personID, rating));
  }
  return Promise.all(ratingPromises);
};
