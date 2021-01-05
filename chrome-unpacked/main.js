let styleSheet = `
.copyBtn {
    background-color: '#add8e6';
    padding: 5px;
    font-size: 12px;
}
`;

let s = document.createElement('style');
s.type = "text/css";
s.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(s);

function copybutton() {
    if(location.href.match(/^https:\/\/www\.codechef\.com\//)){
        console.log("Entered");
        function copy(ele) {
            let temp = document.createElement('textarea');
            document.body.appendChild(temp);
            temp.value = ele.innerText;
            temp.select();
            document.execCommand('copy');
            temp.remove();
        }

        function addCopyBtn(ele) {
            let btn = document.createElement("button");
            btn.innerHTML = "Copy";
            btn.className = "copyBtn";
            btn.onclick = () => {
                copy(ele.lastChild);
            }

            ele.insertBefore(document.createElement('br'), ele.childNodes[0]);
            ele.insertBefore(btn, ele.childNodes[0]);
        }

        let preTags = document.getElementsByTagName("pre");

        console.log(preTags);

        for (let preTag of preTags) {
            addCopyBtn(preTag);
        }

}
}

window.onload = copybutton();

function statushref() {
    var x = window.location.href
    var params = x.split('/')
    console.log(params)
    var contest_id = params[5]
    var problem_id = params[6]
    var status_url = `https://codeforces.com/problemset/status/${contest_id}/problem/${problem_id}`
    document.getElementById('pageContent').getElementsByTagName('a')[2].href = status_url
}

function standings() {

    function colorize()
    {
        // 0: target language name(s), which is/are shown in tooltip on cell
        // 1: CSS class name, you can specify it as you like as long as no duplication
        // 2: CSS style
        // 3: optional, display name in legend. Not specified, the first target language name is used.
        var spec = [

            // GNU C++11 4.9.2
            //[ [
            //'GNU C++11',
            //'GNU C++0x'], 'l-gcpp11',  'background-color: #ccffff !important; border: double #6666ff;' ],
            // GNU C++ 4.9.2
            //  [ 'GNU C++',   'l-gcpp',    'background-color: #ccffff !important;' ],
            // GNU C11 4.9.2
            //  [ 'GNU C11',   'l-gcc11',   'background-color: #ccffff !important; border: solid #6666ff;' ],
            // GNU C 4.9.2
            //[ 'GNU C',     'l-gcc',     'background-color: #ccffff !important; border: dotted #6666ff;' ],
            // Microsoft Visual C++ 2010
            //[ 'MS C++',    'l-mscpp',   'background-color: #ccffff !important; border: dashed #6666ff;' ],

            // Java 11
            [ 'Java 11',    'l-java11',   'background-color: #f3ff33 !important; border: solid #ff33ff;' ],
            // Java 7
            //  [ 'Java 7',    'l-java7',   'background-color: #ffccff !important; border: dotted #ff33ff;' ],
            // Java 6
            //  [ 'Java 6',    'l-java6',   'background-color: #ffccff !important;' ],

            //  [ 'Go',        'l-go',      'background-color: #33cccc !important;' ],

            // JavaScript V8 3
            //  [ 'JavaScript' , 'l-js',    'background-color: #ccff99 !important; border: dashed #ff33ff;', 'JS' ],
            // Perl 5.12+
            //  [ 'Perl',      'l-perl',    'background-color: #ccff99 !important; border: dashed #6666ff;' ],
            // PHP 5.3
            //  [ 'PHP',       'l-php',     'background-color: #ccff99 !important; border: solid #cc00ff;' ],
            // Python 2.7
            [ 'Python 2',  'l-python2', 'background-color: #33e6ff !important; border: dashed #00cc00;' ],
            // Python 3.3
            [ 'Python 3',  'l-python3', 'background-color: #33ff8a !important; border: solid #00cc00;' ],
            // PyPy 2.5.0
            // PyPy 3.2.5
            [ ['PyPy 2',
                'PyPy 3' ], 'l-pypy',    'background-color: #ccff99 !important; border: dotted #00cc00;', 'PyPy' ],

        ];
        var dispname = function(arg) { return (arg.length >= 4) ? arg[3] : (arg[0] instanceof Array) ? arg[0][0] : arg[0]; };
        var toarray = function(arg) { return (arg instanceof Array) ? arg : [arg]; };

        $('table.standings').css('border-collapse', 'separate');

        var style = '<style>.color-legend { border: solid #e1e1e1 1px; }\n';
        var legend = '<table style="margin-left: auto; margin-right: auto; border-collapse: separate;"><tr>';

        for(var i = 0; i < spec.length; ++i) {
            style += 'td.' + spec[i][1] + ' { ' + spec[i][2] + ' }\n';
            legend += '<td style="padding: 0.5em;" class="color-legend ' + spec[i][1] + '">' + dispname(spec[i]) + '</td>';
        }

        style += 'td.highlight-by-lang { background-repeat: no-repeat; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAv1QTFRFAIAAAAAAgIAAAACAgACAAICAgICAwMDA/wAAAP8A//8AAAD//wD/AP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzAABmAACZAADMAAD/ADMAADMzADNmADOZADPMADP/AGYAAGYzAGZmAGaZAGbMAGb/AJkAAJkzAJlmAJmZAJnMAJn/AMwAAMwzAMxmAMyZAMzMAMz/AP8AAP8zAP9mAP+ZAP/MAP//MwAAMwAzMwBmMwCZMwDMMwD/MzMAMzMzMzNmMzOZMzPMMzP/M2YAM2YzM2ZmM2aZM2bMM2b/M5kAM5kzM5lmM5mZM5nMM5n/M8wAM8wzM8xmM8yZM8zMM8z/M/8AM/8zM/9mM/+ZM//MM///ZgAAZgAzZgBmZgCZZgDMZgD/ZjMAZjMzZjNmZjOZZjPMZjP/ZmYAZmYzZmZmZmaZZmbMZmb/ZpkAZpkzZplmZpmZZpnMZpn/ZswAZswzZsxmZsyZZszMZsz/Zv8AZv8zZv9mZv+ZZv/MZv//mQAAmQAzmQBmmQCZmQDMmQD/mTMAmTMzmTNmmTOZmTPMmTP/mWYAmWYzmWZmmWaZmWbMmWb/mZkAmZkzmZlmmZmZmZnMmZn/mcwAmcwzmcxmmcyZmczMmcz/mf8Amf8zmf9mmf+Zmf/Mmf//zAAAzAAzzABmzACZzADMzAD/zDMAzDMzzDNmzDOZzDPMzDP/zGYAzGYzzGZmzGaZzGbMzGb/zJkAzJkzzJlmzJmZzJnMzJn/zMwAzMwzzMxmzMyZzMzMzMz/zP8AzP8zzP9mzP+ZzP/MzP///wAA/wAz/wBm/wCZ/wDM/wD//zMA/zMz/zNm/zOZ/zPM/zP//2YA/2Yz/2Zm/2aZ/2bM/2b//5kA/5kz/5lm/5mZ/5nM/5n//8wA/8wz/8xm/8yZ/8zM/8z///8A//8z//9m//+Z///M////eyQG1gAAAAF0Uk5TAEDm2GYAAAA/SURBVBjTXcjBEQAwBAVRqSZVqjS9mCCIb2/7SEYkB+IBvBH0Aew7+Dd4/yG+ID+hPoAXAbR36G8Ar4BPMv4CC5KBJwNtIOoAAAAASUVORK5CYII="); }\n</style>';
        legend += '</tr></table>';

        $('head').append(style);
        $('div.contest-name').parent().after(legend);

        if(navigator.userAgent.indexOf('Opera') != -1) { // Yes, I know this is ugly solution...
            style = '<style>\n';
            for(var i = 0; i < spec.length; ++i) {
                var tw = $('td.'+ spec[i][1]).css('border-top-width');
                var lw = $('td.'+ spec[i][1]).css('border-left-width');
                var pos = tw + ' ' + lw;
                style += 'td.' + spec[i][1] + ' { background-position: ' + pos + '; }\n';
            }
            style += '</style>';
            $('head').append(style);
        }

        for(var i = 0; i < spec.length; ++i) {
            var key = 'colorize_standings_cf_' + spec[i][1];
            var names = toarray(spec[i][0]);
            for(var j = 0; j < names.length; ++j) {
                $('td[title$="'+ names[j] + '"]').addClass(spec[i][1]);
            }
            if(Codeforces.getCookie(key) == 1) {
                $('td.'+ spec[i][1]).addClass('highlight-by-lang');
            }
            $('td.'+ spec[i][1]).click((function(k, c) { return function() {
                if(Codeforces.getCookie(k) == 1) {
                    document.cookie = k + '=0; expires=Mon, 4-Jun-2012 00:00:00 GMT; path=/';
                } else {
                    document.cookie = k + '=1; path=/';
                }
                $(c).toggleClass('highlight-by-lang'); }; })(key, 'td.'+ spec[i][1])
            );
        }
    }


    ///////////////////////////////////////////////////////////////////////
    //
    // The following part is executed in userjs scope.
    //

    script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '$(document).ready(' + colorize + ');';

    document.body.appendChild(script);
    document.body.removeChild(script);
    // console.log('Matched');
}

function navbar() {
    (function() {
        'use strict';

        const KEY_PREFIX = 'atcoder-problem-navigator-';

        const do_atcoder = () => {
            const contest = location.href.match(/^https:\/\/atcoder\.jp\/contests\/([^\/?]+)/)[1];
            const key = KEY_PREFIX + 'atcoder-' + contest;

            if (location.href.match(/^https:\/\/atcoder\.jp\/contests\/([^\/]+)\/tasks\/?$/)) {
                const problems = [];
                const rows = document.querySelectorAll('tbody>tr');
                for (let i = 0; i < rows.length; i++) {
                    const links = rows[i].querySelectorAll('a');
                    const href = links[0].getAttribute('href');
                    const text = links[0].textContent + ' - ' + links[1].textContent;
                    problems.push({
                        href: href,
                        text: text
                    });
                }
                localStorage[key] = JSON.stringify(problems);
            }

            if (key in localStorage) {
                let problems = JSON.parse(localStorage[key]);
                const problemsBar = document.createElement('ul');
                problemsBar.className = 'nav nav-tabs';
                for (let i = 0; i < problems.length; i++) {
                    const link = document.createElement('a');
                    link.setAttribute('style', 'margin-left: 10px; margin-right: 10px; white-space: nowrap');
                    link.setAttribute('href', problems[i].href);
                    link.textContent = problems[i].text;
                    const span = document.createElement('span');
                    span.textContent = ' ';
                    span.appendChild(link);
                    problemsBar.appendChild(span);
                }
                document.getElementById('contest-nav-tabs').appendChild(problemsBar);
            }
        };

        const do_codeforces = () => {
            const contest = location.href.match(/^https:\/\/codeforces\.com\/contest\/([^\/?]+)/)[1];
            const key = KEY_PREFIX + 'codeforces-' + contest;

            if (location.href.match(/^https:\/\/codeforces\.com\/contest\/([^\/]+)\/?$/)) {
                const problems = [];
                const rows = document.querySelectorAll('.problems>tbody>tr');
                // Starts from 1 to skip the header
                for (let i = 1; i < rows.length; i++) {
                    const links = rows[i].querySelectorAll('a');
                    const href = links[0].getAttribute('href');
                    const text = links[0].textContent.trim() + '. ' + links[1].textContent;
                    problems.push({
                        href: href,
                        text: text
                    });
                }
                localStorage[key] = JSON.stringify(problems);
            }

            if (key in localStorage) {
                let problems = JSON.parse(localStorage[key]);
                const problemsBar = document.createElement('ul');
                problemsBar.setAttribute('style', 'margin-left: 15px; margin-right: 280px; padding-top: 30px');
                for (let i = 0; i < problems.length; i++) {
                    const link = document.createElement('a');
                    link.setAttribute('style', 'margin-right: 20px; white-space: nowrap');
                    link.setAttribute('href', problems[i].href);
                    link.textContent = problems[i].text;
                    const span = document.createElement('span');
                    span.textContent = ' ';
                    span.appendChild(link);
                    problemsBar.appendChild(span);
                }

                const content = document.getElementById('pageContent');
                content.parentNode.insertBefore(problemsBar, content);
            }
        };

        if (location.href.match(/^https:\/\/atcoder\.jp\/contests\//)) {
            do_atcoder();
        } else if (location.href.match(/^https:\/\/codeforces\.com\/contest\//)) {
            do_codeforces();
        }
})();

}

if (location.href.match(/^https:\/\/codeforces\.com\/problemset\/problem\//)) {
    statushref();
}
if (location.href.match(/^https:\/\/codeforces\.com\/contest\//) || location.href.match(/^https:\/\/atcoder\.jp\/contests\//)) {
    navbar();
}
if (location.href.match(/^https:\/\/codeforces\.com\/contest\//)) {
    standings();
}

