<?php

namespace App\Services;

use App\Models\HomePageHero;

class RemodelingHeroService
{
    public function __construct(protected HomePageHero $model) {}

    public function first(): ?HomePageHero
    {
        return $this->model::first();
    }

    public function find($id): ?HomePageHero
    {
        return $this->model->find($id);
    }

    public function update(HomePageHero $hero, array $data): bool
    {
        return $hero->update($data);
    }
}
