FROM php:8.0-fpm

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

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install

# RUN php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration