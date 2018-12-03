var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.gitflow.org/api/user/87/repos');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var parseData = JSON.parse(xhr.responseText);
        console.log(parseData);

        var div = document.getElementById('repo');
        var repoList = parseData.data.repoList;
        var repoNames = '';
        for (var i = 0; i < repoList.length; ++i) {
            repoNames += repoList[i].repoName + '\n';
        }
        document.querySelector('#repo').innerText = repoNames;
        // document.querySelector('#repo').innerText = parseData.data.repoList[0].repoName;
    }
}
xhr.send();