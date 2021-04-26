FROM php:7.4-fpm

RUN apt-get -qq update && apt-get install -y \
    git \
    cpp \
    libpq-dev \
    libicu-dev \
    zip \
    libzip-dev \
    libpng-dev \
    libxml2-dev \
    libonig-dev \
    rsyslog \
    wget \
    curl \
    libjpeg-dev \
    nano

RUN docker-php-ext-configure intl

RUN docker-php-ext-install \
    intl \
    mbstring \
    zip \
    pdo \
    pdo_pgsql \
    exif \
    soap \
    gd

COPY . .