FROM ubuntu:15.10

RUN apt-get update && apt-get install gcc make wget bzip2 libapr1 libapr1-dev libpcre3 libpcre3-dev libxml2 libxml2-dev libmysqlclient18 libmysqlclient-dev curl -y
RUN apt-get install -y php5 php5-dev php-pear autoconf automake curl libcurl3-openssl-dev build-essential libxslt1-dev re2c libxml2 libxml2-dev php5-cli bison libbz2-dev libreadline-dev
RUN apt-get install -y libfreetype6 libfreetype6-dev libpng12-0 libpng12-dev libjpeg-dev libjpeg8-dev libjpeg8  libgd-dev libgd3 libxpm4 libltdl7 libltdl-dev
RUN apt-get install -y libssl-dev openssl
RUN apt-get install -y gettext libgettextpo-dev libgettextpo0
RUN apt-get install -y libicu-dev
RUN apt-get install -y libmhash-dev libmhash2
RUN apt-get install -y libmcrypt-dev libmcrypt4


RUN wget http://ftp.ps.pl/pub/apache//httpd/httpd-2.4.18.tar.bz2
RUN tar -jxvf httpd-2.4.18.tar.bz2
WORKDIR httpd-2.4.18

RUN wget http://ftp.piotrkosoft.net/pub/mirrors/ftp.apache.org//apr/apr-1.5.2.tar.gz
RUN tar zxf apr-1.5.2.tar.gz -C srclib  && mv srclib/apr-1.5.2 srclib/apr
RUN ls srclib/apr

RUN wget http://ftp.piotrkosoft.net/pub/mirrors/ftp.apache.org//apr/apr-util-1.5.4.tar.gz
RUN tar zxf apr-util-1.5.4.tar.gz -C srclib &&  mv srclib/apr-util-1.5.4 srclib/apr-util


RUN ./configure --enable-so --with-included-apr && make && make install



RUN curl -L -O https://github.com/phpbrew/phpbrew/raw/master/phpbrew
RUN ls -l
RUN chmod +x phpbrew
RUN ./phpbrew init
RUN ./phpbrew update
RUN ./phpbrew known







