function skillsMember() {
  var member = document.getElementById('member').value;
  var skills = document.getElementById('skills').value;

  var data = {
    member: member,
    skills: skills
  };

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/skills', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}