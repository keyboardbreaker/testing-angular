import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests', () => {
    let fixture: ComponentFixture<HeroComponent>; //wrapper for a component
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],

        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'superdude', strength: 3}
        fixture.detectChanges();
        expect(fixture.componentInstance.hero.name).toEqual('superdude');
    })
})