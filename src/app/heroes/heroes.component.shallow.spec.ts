import { Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;

    }

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'superdude', strength: 3},
            { id: 2, name: 'woman', strength: 35},
            { id: 3, name: 'supermoo', strength: 27}
        ];
        
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent, 
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService}
            ]
        })
        fixture = TestBed.createComponent(HeroesComponent);

    })

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    })

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })
})