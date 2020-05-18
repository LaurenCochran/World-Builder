
  $("#create").click(function(){
      var e = document.getElementById("scroll");
   e.style.display = 'block';
  });

  $("#submit").click(function(){
      var e = document.getElementById("scroll");
   e.style.display = 'none';
  });

let saveCharFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('charName');
        const age = document.getElementById('age');
        const bday = document.getElementById('bday');
        const nat = document.getElementById('nationality');
        const birth = document.getElementById('birthp');
        const job = document.getElementById('job');
        const eye = document.getElementById('eye');
        const hairColor = document.getElementById('hairColor');
        const height = document.getElementById('height');
        const features = document.getElementById('features');
        const fears = document.getElementById('fears');
        const goals = document.getElementById('goals');
        const additional = document.getElementById('additional');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Age: ' +age.value + ' \r\n ' + 
            'Birthday: ' + bday.value + ' \r\n ' + 
            'Nationality: ' + nat.value + ' \r\n ' + 
            'Birthplace: ' + birth.value + ' \r\n ' + 
            'Job: ' +job.value + ' \r\n ' + 
            'Eye Color: ' + eye.value + ' \r\n ' + 
            'Hair Color: ' + hairColor.value + ' \r\n ' + 
            'Height: ' + height.value  + ' \r\n ' + 
            'Features: ' + features.value + ' \r\n ' + 
            'Fears: ' + fears.value + ' \r\n ' + 
            'Goals: ' + goals.value + ' \r\n ' + 
            'Additional info: ' + additional.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = name.value + '.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }

let saveWorldFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('worldName');
        const environment = document.getElementById('environment');
        const pol = document.getElementById('pol');
        const econ = document.getElementById('econ');
        const hist = document.getElementById('hist');
        const cult = document.getElementById('cult');
        const food = document.getElementById('food');
        const law = document.getElementById('law');
        const supers = document.getElementById('super');
        const tech = document.getElementById('tech');
        const lan = document.getElementById('lan');
        const race = document.getElementById('race');
        const additional = document.getElementById('additional');
        
        // This variable stores all the data.
        let data = 
            '\r World Name: ' + name.value + ' \r\n ' + 
            'Natural Environment: ' +environment.value + ' \r\n ' + 
            'Politics: ' + pol.value + ' \r\n ' + 
            'Economy: ' + econ.value + ' \r\n ' + 
            'History: ' + hist.value + ' \r\n ' + 
            'Culture: ' +cult.value + ' \r\n ' + 
            'Food: ' + food.value + ' \r\n ' + 
            'Law: ' + law.value + ' \r\n ' + 
            'Supernatural: ' + supers.value  + ' \r\n ' + 
            'Technology: ' + tech.value + ' \r\n ' + 
            'Language: ' + lan.value + ' \r\n ' + 
            'Race/Species: ' + race.value + ' \r\n ' + 
            'Additional info: ' + additional.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = name.value + '.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
 
