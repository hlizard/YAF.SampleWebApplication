(function(n){function t(){function o(n){return n&&n.constructor&&n.constructor.toString().match(/\Array\(\)/)}function n(n,t){return Math.floor(n/t)}function t(n){if(o(n))return n;if(n=="")return[];var t=n.split(" ")[0].split("-");return t[1]==undefined&&(t=n.split(" ")[0].split("/")),t}function i(n){return!(n[0]===""||n[1]===""||n[2]==="")}function s(n){n=t(n);var i=u(r(n));return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]}function h(n){n=t(n);var i=r(u(n));return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]}function c(t){var i,e,o,u,r;for(i=t[0]-979,e=t[1]-1,o=t[2]-1,u=365*i+n(i,33)*8+n(i%33+3,4),r=0;r<e;++r)u+=f[r];return u+o}function l(t){var r,f,o,u,i;for(r=1600+400*n(t,146097),t=t%146097,u=1,t>=36525&&(t--,r+=100*n(t,36524),t=t%36524,t>=365?t++:u=0),r+=4*n(t,1461),t%=1461,t>=366&&(u=0,t--,r+=n(t,365),t=t%365),i=0;t>=e[i]+(i==1&&u);i++)t-=e[i]+(i==1&&u);return f=i+1,o=t+1,[r,f,o]}function a(t){var i,f,o,r,u;for(i=t[0]-1600,f=t[1]-1,o=t[2]-1,r=365*i+n(i+3,4)-n(i+99,100)+n(i+399,400),u=0;u<f;++u)r+=e[u];return f>1&&(i%4==0&&i%100!=0||i%400==0)&&++r,r+o}function v(t){var u,r,e,o,i;for(u=n(t,12053),t%=12053,r=979+33*u+4*n(t,1461),t%=1461,t>=366&&(r+=n(t-1,365),t=(t-1)%365),i=0;i<11&&t>=f[i];++i)t-=f[i];return e=i+1,o=t+1,[r,e,o]}function r(n){return(n=t(n),!i(n))?[]:l(c(n)+79)}function u(n){return(n=t(n),!i(n))?[]:v(a(n)-79)}var f=[31,31,31,31,31,31,30,30,30,30,30,29],e=[31,28,31,30,31,30,31,31,30,31,30,31];return{gregorianToJalali:function(n){return u(n)},gregorianToJalaliStr:function(n){var f=t(n),r;return i(f)?(r=u(f),r[0]+"/"+(r[1]>9?r[1]:"0"+r[1])+"/"+(r[2]>9?r[2]:"0"+r[2])):""},jalaliToGregorianStr:function(n,u){var e=t(n),f;return i(e)?(f=r(e),f[0]+"/"+f[1]+"/"+f[2]+(u?" "+n.split(" ")[1].split(".")[0]:"")):""},jalaliToGregorian:function(n){return r(n)},today:function(){var n=new Date;return this.gregorianToJalaliStr([n.getFullYear(),n.getMonth()+1,n.getDate()])},isValidJ:function(n){return s(n)},isValidG:function(n){return h(n)},getDaysInMonth:function(n,t){return 32-new Date(n,t,32).getDate()},version:"1.0.0"}}n._gDate==undefined&&(Date.prototype._getFullYear=Date.prototype.getFullYear,Date.prototype._setFullYear=Date.prototype.setFullYear,Date.prototype._getMonth=Date.prototype.getMonth,Date.prototype._setMonth=Date.prototype.setMonth,Date.prototype._getDate=Date.prototype.getDate,Date.prototype._setDate=Date.prototype.setDate,Date.prototype._getCJD=function(){return n.jalaliCalendar.gregorianToJalali([this._getFullYear(),this._getMonth()+1,this._getDate()])},Date.prototype.getFullYear=function(){return this._getCJD()[0]},Date.prototype.setFullYear=function(t){var r=this._getCJD(),i=n.jalaliCalendar.jalaliToGregorian([t,r[1],r[2]]);this._setDate(1),this._setFullYear(i[0]),this._setMonth(i[1]-1),this._setDate(i[2])},Date.prototype.getMonth=function(){return this._getCJD()[1]-1},Date.prototype.setMonth=function(t){var r=this._getCJD(),i=n.jalaliCalendar.jalaliToGregorian([r[0],t+1,r[2]]);this._setDate(1),this._setFullYear(i[0]),this._setMonth(i[1]-1),this._setDate(i[2])},Date.prototype.getDate=function(){return this._getCJD()[2]},Date.prototype.setDate=function(t){var r=this._getCJD(),i=n.jalaliCalendar.jalaliToGregorian([r[0],r[1],t]);this._setDate(1),this._setFullYear(i[0]),this._setMonth(i[1]-1),this._setDate(i[2])},n._gDate=Date,window.Date=function(){var u,r,t,f,i;for(this.prototype=n._gDate.prototype,u=[],r=arguments.length,t=0;t<r;t++)u.push(arguments[t]);if(f=null,r==0)f=new n._gDate;else if(r==1)f=new n._gDate(u[0]);else if(r>=3){for(u[1]++,i=n.jalaliCalendar.jalaliToGregorian(u),t=3;t<r;t++)i.push(u[t]);for(t=r;t<7;t++)i.push(0);f=new n._gDate(i[0],i[1]-1,i[2],i[3],i[4],i[5],i[6])}return f}),n.jalaliCalendar==undefined&&(n.jalaliCalendar=new t,window.jalaliCalendar=n.jalaliCalendar)})(jQuery);