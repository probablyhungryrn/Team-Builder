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

//==== PERSONS ====

/**
 * addPerson
 * @param {*} data
 */
TeamBuilder.prototype.addPerson = function(data) {
  const collection = firebase.firestore().collection('persons');
  return collection.add(data);
};

TeamBuilder.prototype.getAllPersons = function(render) {
  const query = firebase.firestore()
                    .collection('persons')
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getDocumentsInQuery = function(query, render) {
  query.onSnapshot(snapshot => {
    if (!snapshot.size) return render();

    snapshot.docChanges.forEach(change => {
      if (change.type === 'added') {
        render(change.doc);
      }
    });
  });
};

TeamBuilder.prototype.getPerson = function(id) {
  return firebase.firestore().collection('persons').doc(id).get();
};

TeamBuilder.prototype.getFilteredPersons = function(filters, render) {
  let query = firebase.firestore().collection('persons');

  // if (filters.category !== 'Any') {
  //   query = query.where('category', '==', filters.category);
  // }
  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.skills !== 'Any') {
    query = query.where('city', '==', filters.city);
  }

  if (filters.price !== 'Any') {
    query = query.where('price', '==', filters.price.length);
  }

  this.getDocumentsInQuery(query, render);
};

// ==== IDEAS ====

/**
 * addIdea
 * @param {*} data
 */
TeamBuilder.prototype.addIdea = function(data) {
  const collection = firebase.firestore().collection('ideas');
  return collection.add(data);
};

/**
 * Returns Ideas
 * @param {*} render
 */
TeamBuilder.prototype.getAllIdeas = function(render) {
  const query = firebase.firestore()
                    .collection('ideas')
                    // .where(active, '==', true)
                    .orderBy('addedTime', 'desc')
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getIdea = function(id) {
  return firebase.firestore().collection('ideas').doc(id).get();
};

TeamBuilder.prototype.getFilteredIdeas = function(filters, render) {
  let query = firebase.firestore().collection('ideas');

  if (filters.active !== false) {
    filters.active = true;
  }

  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.active === true) {
    query = query.where("active", '==', true);
  }

  this.getDocumentsInQuery(query, render);
};

// ==== EVENTS ====

/**
 * addEvent
 * @param {*} data
 */
TeamBuilder.prototype.addEvent = function(data) {
  const collection = firebase.firestore().collection('events');
  return collection.add(data);
};

/**
 * Returns Ideas
 * @param {*} render
 */
TeamBuilder.prototype.getAllIdeas = function(render) {
  const query = firebase.firestore()
                    .collection('events')
                    // .where(active, '==', true)
                    .orderBy('addedTime', 'desc')
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getEvent = function(id) {
  return firebase.firestore().collection('events').doc(id).get();
};

TeamBuilder.prototype.getFilteredEvents = function(filters, render) {
  let query = firebase.firestore().collection('events');

  if (filters.active !== false) {
    filters.active = true;
  }

  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.active === true) {
    query = query.where("active", '==', true);
  }

  this.getDocumentsInQuery(query, render);
};

// ==== SKILLS  ====

/**
 * addSkill
 * @param {*} data
 */
TeamBuilder.prototype.addSkill = function(data) {
  const collection = firebase.firestore().collection('skills');
  return collection.add(data);
};

/**
 * Returns Skills
 * @param {*} render
 */
TeamBuilder.prototype.getAllSkills = function(render) {
  const query = firebase.firestore()
                    .collection('skills')
                    // .where(active, '==', true)
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getSkill = function(id) {
  return firebase.firestore().collection('skills').doc(id).get();
};

TeamBuilder.prototype.getFilteredSkills = function(filters, render) {
  let query = firebase.firestore().collection('skills');

  if (filters.active !== false) {
    filters.active = true;
  }

  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.active === true) {
    query = query.where("active", '==', true);
  }
  
  this.getDocumentsInQuery(query, render);
};


// ==== EVENTS ====

/**
 * addEvent
 * @param {*} data
 */
TeamBuilder.prototype.addEvent = function(data) {
  const collection = firebase.firestore().collection('events');
  return collection.add(data);
};

/**
 * Returns Events
 * @param {*} render
 */
TeamBuilder.prototype.getAllEvents = function(render) {
  const query = firebase.firestore()
                    .collection('events')
                    // .where(active, '==', true)
                    .orderBy('addedTime', 'desc')
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getEvent = function(id) {
  return firebase.firestore().collection('events').doc(id).get();
};

TeamBuilder.prototype.getFilteredEvents = function(filters, render) {
  let query = firebase.firestore().collection('events');

  if (filters.active !== false) {
    filters.active = true;
  }

  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.active === true) {
    query = query.where("active", '==', true);
  }

  this.getDocumentsInQuery(query, render);
};

// ==== SKILLS  ====

/**
 * addSkill
 * @param {*} data
 */
TeamBuilder.prototype.addSkill = function(data) {
  const collection = firebase.firestore().collection('skills');
  return collection.add(data);
};

/**
 * Returns Skills
 * @param {*} render
 */
TeamBuilder.prototype.getAllSkills = function(render) {
  const query = firebase.firestore()
                    .collection('skills')
                    // .where(active, '==', true)
                    .orderBy('name', 'asc')
                    .limit(50);
  this.getDocumentsInQuery(query, render);
};

TeamBuilder.prototype.getSkill = function(id) {
  return firebase.firestore().collection('skills').doc(id).get();
};

TeamBuilder.prototype.getFilteredSkills = function(filters, render) {
  let query = firebase.firestore().collection('skills');

  if (filters.active !== false) {
    filters.active = true;
  }

  if (filters.category !== 'Any') {
    for (let skill of filters.skills) {
      query = query.where('skills', '==', skill);
    }
  }

  if (filters.active === true) {
    query = query.where("active", '==', true);
  }
  
  this.getDocumentsInQuery(query, render);
};

