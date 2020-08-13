var x = window.location.href
var params = x.split('/')
var contest_id = params[5]
var problem_id = params[6]
var status_url = `https://codeforces.com/problemset/status/${contest_id}/problem/${problem_id}`
document.getElementById('pageContent').getElementsByTagName('a')[2].href = status_url