<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class HomePageHero extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'button1_text',
        'button1_url',
        'button2_text',
        'button2_url',
        'overlay_color',
        'background_image',
        'additional_information',
    ];

    protected $appends = [
        'background_image_url',
    ];

    protected function casts(): array
    {
        return [
            'overlay_color' => 'string',
        ];
    }

    protected function backgroundImageUrl(): Attribute
    {
        return Attribute::get(
            get: function (): ?string {
                $path = $this->attributes['background_image'] ?? null;

                return $path ? asset('storage/'.$path) : null;
            }
        );
    }
}
