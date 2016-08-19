import Ember from 'ember';

export function changeFormat(params/*, hash*/) {
  var result = '';
  for(var i=0; i<params[0].length; i++){
    if(params[0][i]!==' '){
      result+=params[0][i];
      console.log(result);
    }
  }
  return result;
}

export default Ember.Helper.helper(changeFormat);
