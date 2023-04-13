(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3006:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},r=n(9526),o={date:(0,r.Z)({formats:{full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},a={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},l=n(8486),d={ordinalNumber:function(e,t){var n=Number(e);switch(String(null==t?void 0:t.unit)){case"minute":case"second":return String(n);case"date":return n+"일";default:return n+"번째"}},era:(0,l.Z)({values:{narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},defaultWidth:"wide"}),quarter:(0,l.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,l.Z)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},defaultWidth:"wide"}),day:(0,l.Z)({values:{narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},defaultWidth:"wide"}),dayPeriod:(0,l.Z)({values:{narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},defaultWidth:"wide",formattingValues:{narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},defaultFormattingWidth:"wide"})},s=n(6723),c={code:"ko",formatDistance:function(e,t,n){var r,o=i[e];return(r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?r+" 후":r+" 전":r},formatLong:o,formatRelative:function(e,t,n,i){return a[e]},localize:d,match:{ordinalNumber:(0,n(974).Z)({matchPattern:/^(\d+)(일|번째)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,s.Z)({matchPatterns:{narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(bc|기원전)/i,/^(ad|서기)/i]},defaultParseWidth:"any"}),quarter:(0,s.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,s.Z)({matchPatterns:{narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,s.Z)({matchPatterns:{narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},defaultMatchWidth:"wide",parsePatterns:{any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},defaultParseWidth:"any"}),dayPeriod:(0,s.Z)({matchPatterns:{any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},7534:function(e,t,n){"use strict";n.d(t,{Ey:function(){return a},n6:function(){return l},Mh:function(){return d}});var i=n(2125).default.svg.withConfig({displayName:"SVGstyle__StyledSVG",componentId:"sc-txn9ep-0"})(["fill:",";"],function(e){return e.theme.colors.bold}),r=n(5893),o=function(e){var t=e.width,n=e.height,o=e.children,a=e.fill,l=e.viewBox;return(0,r.jsx)(i,{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,fill:a,viewBox:l,children:o})},a=function(){return(0,r.jsx)(o,{width:24,height:24,children:(0,r.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"})})},l=function(){return(0,r.jsx)(o,{width:24,height:24,children:(0,r.jsx)("path",{d:"M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145V7.773ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"})})},d=function(){return(0,r.jsx)(o,{width:24,height:24,children:(0,r.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"})})}},4750:function(e,t,n){"use strict";var i=n(5893);t.Z=function(e){var t=e.dateFrom,n=e.dateTo,r=function(e){return e?"".concat(e.split("-")[0],". ").concat(e.split("-")[1]):""};return(0,i.jsxs)("span",{children:[(0,i.jsx)("time",{dateTime:t,children:r(t)})," ~ ",(0,i.jsx)("time",{dateTime:n,children:r(n)})]})}},9765:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(1664),r=n.n(i),o=n(9711),a=n(8420),l=n(3006),d=n(7534),s=n(2125),c=n(4575),u=s.default.div.withConfig({displayName:"Titlestyle__Header",componentId:"sc-1housxh-0"})(["display:flex;justify-content:space-between;","{flex-direction:column;}"],c.BC.tablet),h=s.default.h1.withConfig({displayName:"Titlestyle__StyledTitle",componentId:"sc-1housxh-1"})(["font-size:5rem;line-height:1.1;margin:0.67em 0;word-break:keep-all;","{font-size:3rem;}"],c.BC.tablet),m=s.default.div.withConfig({displayName:"Titlestyle__Icons",componentId:"sc-1housxh-2"})(["display:flex;"]),f=s.default.div.withConfig({displayName:"Titlestyle__Icon",componentId:"sc-1housxh-3"})(["padding:10px;"]),p=n(5893),x=function(e){var t=e.date,n=e.githubLink,i=e.linkedinLink,s=e.mailLink,c=e.title;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(u,{children:[(0,p.jsx)(h,{children:c}),(0,p.jsxs)(m,{children:[n&&(0,p.jsx)(f,{children:(0,p.jsx)(r(),{href:n,target:"_blank","aria-label":"Go to Github link",children:(0,p.jsx)(d.Ey,{})})}),i&&(0,p.jsx)(f,{children:(0,p.jsx)(r(),{href:i,target:"_blank","aria-label":"Go to Linkedin link",children:(0,p.jsx)(d.n6,{})})}),s&&(0,p.jsx)(f,{children:(0,p.jsx)(r(),{href:s,"aria-label":s,children:(0,p.jsx)(d.Mh,{})})})]})]}),t&&(0,p.jsx)("p",{children:(0,o.Z)((0,a.Z)(String(t)),"MMMM do, yyyy",{locale:l.Z})})]})}},8900:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(5152),r=n.n(i),o=n(9499),a=n(9008),l=n.n(a),d=n(1163),s=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var u="https://julrum.github.io",h=function(e){var t=e.customMeta,n=(0,d.useRouter)(),i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({title:"Portfolio | Junwon Park",description:"Junwon's portfolio.",image:"/images/blog/blog01.webp",type:"website"},t);return(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:i.title}),(0,s.jsx)("meta",{name:"description",content:i.description}),(0,s.jsx)("link",{rel:"canonical",href:"".concat(u).concat(n.asPath)}),(0,s.jsx)("meta",{property:"og:url",content:"".concat(u).concat(n.asPath)}),(0,s.jsx)("meta",{property:"og:type",content:i.type}),(0,s.jsx)("meta",{property:"og:site_name",content:i.title}),(0,s.jsx)("meta",{property:"og:description",content:i.description}),(0,s.jsx)("meta",{property:"og:title",content:i.title}),(0,s.jsx)("meta",{property:"og:image",content:i.image}),(0,s.jsx)("meta",{name:"twitter:title",content:i.title}),(0,s.jsx)("meta",{name:"twitter:description",content:i.description}),(0,s.jsx)("meta",{name:"twitter:image",content:i.image}),i.date&&(0,s.jsx)("meta",{property:"article:published_time",content:i.date})]})},m=n(2125),f=m.default.div.withConfig({displayName:"Layoutstyle__Wrapper",componentId:"sc-ji2qbr-0"})(["background-color:",";height:100%;width:100%;"],function(e){return e.theme.colors.basicBg}),p=m.default.div.withConfig({displayName:"Layoutstyle__ContentWrapper",componentId:"sc-ji2qbr-1"})(["display:flex;justify-content:center;"]),x=m.default.main.withConfig({displayName:"Layoutstyle__Content",componentId:"sc-ji2qbr-2"})(["background-color:",";height:100%;padding:2rem;width:800px;"],function(e){return e.theme.colors.basicBg}),g=r()(function(){return n.e(479).then(n.bind(n,9479))},{loadableGenerated:{webpack:function(){return[9479]}}}),b=function(e){var t=e.children,n=e.customMeta;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{customMeta:n}),(0,s.jsxs)(f,{children:[(0,s.jsx)(p,{children:(0,s.jsx)(x,{children:t})}),(0,s.jsx)(g,{})]})]})}},9609:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return v}});var i=n(9008),r=n.n(i),o=n(5152),a=n.n(o),l=n(5893),d=function(e){var t=e.label,n=e.link;return(0,l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer","aria-label":t,children:t})},s=n(9765),c=n(8900),u=n(4750),h=n(2125),m=n(4575),f=h.default.div.withConfig({displayName:"Rowstyle__Wrapper",componentId:"sc-5hltf5-0"})(["border-bottom:1px solid ",";display:flex;padding:3rem 0;","{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;flex-direction:column;}"],function(e){return e.theme.colors.bgDivider},m.BC.tablet),p=h.default.div.withConfig({displayName:"Rowstyle__RowRight",componentId:"sc-5hltf5-1"})(["-ms-flex-positive:1;-webkit-box-flex:1;display:flex;flex-direction:column;flex-grow:1;div:first-child{padding-top:0;}"]),x=h.default.div.withConfig({displayName:"Rowstyle__RowLeft",componentId:"sc-5hltf5-2"})(["-ms-flex-negative:0;display:flex;flex-basis:18rem;flex-direction:column;flex-shrink:0;padding-right:1rem;","{-ms-flex-preferred-size:100%;flex-basis:100%;padding-bottom:1rem;padding-right:0;}"],m.BC.tablet),g=function(e){var t=e.additional,n=e.children,i=e.companyName,r=e.role,o=e.dateFrom,a=e.dateTo;return(0,l.jsxs)(f,{children:[(0,l.jsxs)(x,{children:[(0,l.jsx)("h3",{children:i}),(0,l.jsx)("span",{children:r}),(0,l.jsx)(u.Z,{dateFrom:o,dateTo:a}),t]}),(0,l.jsx)(p,{children:n})]})},b=a()(function(){return n.e(699).then(n.bind(n,7699))},{loadableGenerated:{webpack:function(){return[7699]}}}),j=a()(function(){return n.e(595).then(n.bind(n,6595))},{loadableGenerated:{webpack:function(){return[6595]}}}),w=a()(function(){return n.e(359).then(n.bind(n,5359))},{loadableGenerated:{webpack:function(){return[5359]}}}),y=!0,v=function(e){var t=e.workExperiences,n=e.otherExperiences,i=e.certificate,o=e.skill;return(0,l.jsxs)(c.Z,{customMeta:{title:"Junwon Park"},children:[(0,l.jsx)(r(),{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),(0,l.jsxs)("article",{children:[(0,l.jsx)(s.Z,{githubLink:"https://github.com/Julrum",linkedinLink:"https://www.linkedin.com/in/julrum/",mailLink:"mailto:junwon@duck.com",title:"새로운 것을 끊임없이 탐구하는 개발자 박준원입니다."}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"\xa0스타트업에서 웹 서비스를 기획/개발/배포/운영하였습니다. 주로 웹 서비스 개발을 담당하였으며 PO(Product Owner) 역할을 겸하였습니다."}),(0,l.jsx)("p",{children:"\xa0코드 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며 같은 기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하고 있습니다. 레거시 코드를 리팩터링하고 개선하는 것을 즐겨합니다."}),(0,l.jsx)("p",{children:"\xa0혼자서의 개발보다는 동료들과의 끊임없는 커뮤니케이션을 통해 협업하는 것을 더 선호합니다. 국방부에서 진행한 프로젝트에서도 동료들과의 계속된 소통으로 서로의 생각을 정리하고 공유하여 제한된 자원으로 주어진 짧은 기간 안에 성공적으로 프로젝트를 끝마친 경험이 있습니다."})]}),(0,l.jsx)("h2",{children:"Work Experience"}),t&&t.map(function(e,t){var n,i;return(0,l.jsx)(g,{additional:e.additional&&(0,l.jsx)(d,{label:null===(n=e.additional)||void 0===n?void 0:n.label,link:null===(i=e.additional)||void 0===i?void 0:i.link}),companyName:e.companyName,role:e.role,dateFrom:e.dateFrom,dateTo:e.dateTo,children:e.project.map(function(e,t){return(0,l.jsx)(j,{dateFrom:e.dateFrom,dateTo:e.dateTo,description:e.description,detailLink:e.detailLink,skill:e.skill,title:e.title,children:(0,l.jsx)("ul",{children:e.detail.map(function(e,t){return(0,l.jsx)("li",{children:e},t)})})},t)})},t)}),(0,l.jsx)("h2",{children:"Other Experiences"}),n&&n.map(function(e,t){return e.companyName&&e.dateFrom&&e.role?(0,l.jsx)(g,{companyName:e.companyName,dateFrom:e.dateFrom,role:e.role,children:e.project.map(function(e,t){return(0,l.jsx)(j,{dateFrom:e.dateFrom,dateTo:e.dateTo,description:e.description,detailLink:e.detailLink,githubLink:e.gitthuLink,skill:e.skill,title:e.title,children:(0,l.jsx)("ul",{children:e.detail.map(function(e,t){return(0,l.jsx)("li",{children:e},t)})})},t)})},t):(0,l.jsx)(l.Fragment,{children:e.project.map(function(e,t){return(0,l.jsx)(j,{dateFrom:e.dateFrom,dateTo:e.dateTo,description:e.description,detailLink:e.detailLink,githubLink:e.gitthuLink,other:!0,skill:e.skill,title:e.title,children:(0,l.jsx)("ul",{children:e.detail.map(function(e,t){return(0,l.jsx)("li",{children:e},t)})})},t)})})}),(0,l.jsx)("h2",{children:"Certificates"}),(0,l.jsx)("ul",{children:i&&i.certificates.map(function(e,t){return(0,l.jsx)("li",{children:(0,l.jsx)(d,{label:e.label,link:e.link})},t)})}),(0,l.jsx)("h2",{children:"SKILLS"}),(0,l.jsx)(w,{children:o&&o.skill.map(function(e,t){return(0,l.jsx)(b,{title:e.title,list:e.list},t)})})]})]})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9609)}])}},function(e){e.O(0,[502,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);