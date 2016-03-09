FROM ubuntu:15.10

RUN apt-get update && apt-get install gcc make wget bzip2 libapr1 libapr1-dev libpcre3 libpcre3-dev libxml2 libxml2-dev libmysqlclient18 libmysqlclient-dev curl -y
RUN wget http://archive.apache.org/dist/httpd/httpd-2.2.9.tar.gz
RUN tar -zxvf httpd-2.2.9.tar.gz
WORKDIR httpd-2.2.9

RUN wget http://ftp.piotrkosoft.net/pub/mirrors/ftp.apache.org//apr/apr-1.5.2.tar.gz
RUN tar zxf apr-1.5.2.tar.gz -C srclib  && mv srclib/apr-1.5.2 srclib/apr
RUN ls srclib/apr

RUN wget http://ftp.piotrkosoft.net/pub/mirrors/ftp.apache.org//apr/apr-util-1.5.4.tar.gz
RUN tar zxf apr-util-1.5.4.tar.gz -C srclib &&  mv srclib/apr-util-1.5.4 srclib/apr-util

RUN apt-get install perl -y
RUN ./configure --enable-so --with-included-apr && make && make install

WORKDIR /
RUN wget http://museum.php.net/php5/php-5.2.17.tar.bz2 && tar jxf php-5.2.17.tar.bz2
WORKDIR php-5.2.17

RUN wget https://mail.gnome.org/archives/xml/2012-August/txtbgxGXAvz4N.txt
RUN apt-get install patch -y
RUN patch -p0 -b < txtbgxGXAvz4N.txt

RUN ./configure --with-apxs2=/usr/local/apache2/bin/apxs --with-mysql=/usr/bin/ --with-libdir=/lib/x86_64-linux-gnu
RUN make
RUN make install

CMD /usr/local/apache2/bin/apachectl -D FOREGROUND











