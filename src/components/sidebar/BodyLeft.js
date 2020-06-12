import React from "react";
import { Button, Divider, Label, Icon, ButtonGroup } from "semantic-ui-react";
import "./BodyLeft.scss";
import { Link } from "react-router-dom";
const BodyLeft = () => {
  return (
    <ButtonGroup vertical fluid>
      <Button >
        <Icon name="home" />
        <Link to="/">Главная</Link>
      </Button>
      <Button>
        <Icon name="fire" />
        <Link to="/trending"> В тренде </Link>
      </Button>
      <Button>
        <Icon name="mail" />
        Подписки
      </Button>
      <Divider />
      <Button>
        <Icon name="play circle" />
        Библиотека
      </Button>
      <Button>
        <Icon name="undo" />
        История
      </Button>
      <Button>
        <Icon name="mail" />
        Ваши видео
      </Button>
      <Button>
        <Icon name="clock" />
        Смореть позже
      </Button>
      <Button>
        <Icon name="like" />
        Понравившиеся
      </Button>
      <Divider />
      <Label>ПОДПИСКИ</Label>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Button>
        <Icon name="circle" /> Channel
      </Button>
      <Divider />
      <Label>Другие возможности</Label>
      <Button>
        <Icon name="circle" /> Youtube Premium
      </Button>
      <Button>
        <Icon name="circle" /> Фильмы
      </Button>
      <Button>
        <Icon name="circle" /> Видеоигры
      </Button>
      <Button>
        <Icon name="circle" /> Трансляции
      </Button>
      <Divider />
      <Button>
        <Icon name="circle" /> Настройки
      </Button>
      <Button>
        <Icon name="circle" /> Жалобы
      </Button>
      <Button>
        <Icon name="circle" /> Справка
      </Button>
      <Button>
        <Icon name="circle" /> Отправить отзыв
      </Button>
    </ButtonGroup>
  );
};

export default BodyLeft;
