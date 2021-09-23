import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'superdude', strength: 3},
            { id: 2, name: 'woman', strength: 35},
            { id: 3, name: 'supermoo', strength: 27}
        ];
        
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
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
})