# ChineseCalendar
ChineseCalendar中华万年历(公元️前2000-公元2200年)是包含公历、农历、回历、佛历、道历的日历工具库，支持中国年号。

# 功能特性介绍
## 中华万年历特点
* 全面支持**农历**（干支、月塑、节气、年号）
* 支持公历农历转换
* 支持公历/农历与**回历、佛历、道历**转换
* 范围广-**万年历**（覆盖人元纪年）
* 支持各种**节假日**
* 支持中国传统文化（包含生肖、八字、禁忌等）
* **以推算为主，辅助历史数据校正**

## 历法
历法是以日為基礎單位计算時間的方法。一日以內的時間計算為計時。  
主要分为阳历、阴历和阴阳历三种。 阳历亦即太阳历，其曆年为一个回归年，现时国际通用的公历（西历）即为太阳历的一种，亦简称为阳历； 阴历亦称月亮曆，或称太历的一种；
阴阳历的平均曆年为一个回归年，曆月为朔望月，因为12个朔望月与回归年相差太大，所以阴阳历中设置闰月，所以这种历法与月相相符，也与地球绕太阳周期运动相符合。
中国的农历就是阴阳历的一种。

历法时间单位：
* 年
* 月
* 日
* 星期/七曜  [维基百科-星期](https://zh.wikipedia.org/wiki/%E6%98%9F%E6%9C%9F) 
* 干支（农历）
* 节气（农历）
* 年号（中国/日本）

[维基百科-历法](https://zh.wikipedia.org/wiki/%E5%8E%86%E6%B3%95)

### [公历Gregorian](./doc/Gregorian.md)
公曆（格勒哥里曆）是世界上大多數地方使用的曆法。1582年10月，教宗格勒哥里十三世（Pope Gregory XIII）介紹和引入這種曆法，作為對儒略曆（Julian calendar）的修改和替代。
主要的變化是對閏年的加入進行了不同的劃分，使平均行事曆年長365.2425天，更接近由地球繞太陽公轉决定的365.2422天的回歸或太陽年。

公历自1582年10月15日起用格里高里历，之前用儒略历，格里高里历改使1582年10月4日的下一日变成10月15日。
公元8年以前的日期用逆推的儒略历(proleptic Julian calendar)。

### [农历Lunar](./doc/Lunar.md)
農曆，現今中华文化圈民間傳統廣泛使用的陰陽合曆。古代相傳為黃帝時代或者夏朝創制，又稱黃曆、夏曆。

### [回历/伊历Hijri](./doc/Hijri.md)
伊斯兰曆在中國又稱回曆、回教曆、回回曆（这是回回阴历，與“回回阳历”（即波斯曆）不同）、伊曆（與“伊朗曆”不同）、穆罕默德曆、阿拉伯曆、西域曆、土盘曆、遷都曆等。
伊斯兰曆是一种纯粹阴曆，也是現今仍在使用的曆法中唯一的阴曆。以公元622年7月16日为紀年元年一月一日，完全以月相为准，
每当新月出现时定为每月的第一日，12个月为一年，不设闰月，闰年于第12个月后加一天（每30年中設11閏年）。

### [佛历Foto](./doc/Foto.md) 
佛历（巴利语：Sāsanā Sakaraj），一种传统历法，为阴阳历，这种历法盛行于南亚和东南亚的佛教国家，如柬埔寨、泰国。
其纪年法，称佛灭纪元，以释迦牟尼佛灭度（涅槃）当年度为计算基准。 目前汉传佛教徒所使用的佛历，只用佛历纪年，其余月、日安排多使用农历（亦有用格里历的）。

### [道历Tao](./doc/Tao.md)  
道曆為現代道教所使用的曆法，以黃帝紀元（格里曆前2697年）開始計算，其餘月份安排等與農曆相同。
公元紀年天干地支的是減去分別在前2697年起即由為六十甲子紀年法。

### [人类纪年Human Era](./doc/Human.md)
全新世紀年或人類紀年（Holocene calendar或Human Era），与公元相对应，简称人元（HE），是一种由現时采用的公曆（即格里曆）改良而來的紀年方法，它引入0年，并在公曆年數上多加 10000 。

## 节假日
包含宗教节日/民族节日，以及法定节假日。
### 民族节日
### 法定节假日

## 开发库以及主要API
预计逐步提供JS/Java/Python开发库，后续根据情况再确认是否补充其他语言开发库。
* javascript
* java
* python

# 参考资料
## 资料
* ChineseCalendar农历   
  公历与农历转换        
  https://github.com/ytliu0/ChineseCalendar 
* 农历网   
http://www.nongli.net/   
寿星万年历 http://www.nongli.net/sxwnl/   
黄道日历  http://www.nongli.net/huangli/

* 农历计算文章  
[万年历的推算](https://mp.weixin.qq.com/s?src=11&timestamp=1665925713&ver=4108&signature=lcw5Mp9T5d9pOh5qeS9jYZutqDiD8tvxGWO4wtHBw*zg2D3957EkFl*FhHBfPhPZ7oy6N5I3i0F3tsyUzfkhvFB85aox6EelHqOVeswtsNj8fOgmRK0kIT0oF9IK14SQ&new=1)        
[农历计算方法](https://www.jianshu.com/p/d3b63ee7492f)    

## 开源项目
* lunar/Calendar  
lunar是一个支持阳历、阴历、佛历和道历的日历工具库，它开源免费，有多种开发语言的版本，不依赖第三方，支持阳历、阴历、佛历、道历、儒略日的相互转换，它能用来制作日历，甚至算命。
https://6tail.cn/calendar/api.html#overview.html

* cnlunar   
农历，中国农历历法项目，无需数据库环境，以《钦定协纪辨方书》为核心的python3 农历、黄历、二十四节气、节假日、星次、每日凶煞、每日值神、农历建除十二神、农历每日宜忌、彭祖百忌、每日五行、二十八星宿、天干地支、农历生辰八字、时辰凶吉等开源项目。    
https://github.com/OPN48/cnlunar

* Vue Calendar  
https://github.com/jinzhe/vue-calendar

* tui.calendar    
  🍞📅A JavaScript calendar that has everything you need.  
https://github.com/nhn/tui.calendar

## 历法数据
### 公历与农历对照
* 香港天文台公历与农历对照表1901至2100年  
https://www.hko.gov.hk/tc/gts/time/conversion.htm 
* 台湾中研院兩千年中西曆轉換  
https://sinocal.sinica.edu.tw/
