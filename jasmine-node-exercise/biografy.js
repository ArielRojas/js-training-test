/**
 * Created by ArielWagner on 29/09/2015.
 */

var getBio = function(name, age){
this.nameBiografy = name;
this.ageBiografy = age;
if(name === undefined || age === undefined)
    throw 'Need name and age to provide a biografy';
if(typeof(age) != 'number' || age < 0)
    throw 'Invalid age';
return 'Mi, my name is ' + name + ', I am ' + age + 'years old and I am a nice guy.';
};

module.exports = getBio;